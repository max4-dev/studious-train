import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BoilerPartsService } from '../boiler-parts/boiler-parts.service';
import { UsersService } from '../users/users.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ShoppingCart } from './shopping-cart.model';

@Injectable()
export class ShoppingCartService {
  constructor(@InjectModel(ShoppingCart)
    @InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    @Inject(UsersService)
    private readonly usersService: UsersService,
    @Inject(BoilerPartsService)
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async findAll(userId: number | string) : Promise<ShoppingCart[]> {
    return this.shoppingCartModel.findAll({where: {userId}})
  }

  async add(addToCartDto: AddToCartDto) {
    const cart: any = new ShoppingCart();
    const user: any = await this.usersService.findOne({where: {username: addToCartDto.username}});
    const part: any = await this.boilerPartsService.findOne(addToCartDto.partId);

    cart.userId = user.id;
    cart.partId = part.id;
    cart.boiler_manufacturer = part.boiler_manufacturer;
    cart.parts_manufacturer = part.parts_manufacturer;
    cart.price = part.price;
    cart.in_stock = part.in_stock;
    cart.image = JSON.parse(part.images)[0];
    cart.name = part.name;
    cart.total_price = part.price;

    return cart.save();
  }

  async updateCount(count: number, partId: number): Promise<{count: number}> {
    await this.shoppingCartModel.update({count}, {where: {partId}});

    const part= await this.shoppingCartModel.findOne({where: {partId}});
    return {count: part.count}
  }

  async updateTotalPrice(total_price: number, partId: number | string): Promise<{total_price: number}> {
    await this.shoppingCartModel.update({total_price}, {where: {partId}});

    const part= await this.shoppingCartModel.findOne({where: {partId}});
    return {total_price: part.total_price}
  }

  async remove(partId: number): Promise<void> {
    const part= await this.shoppingCartModel.findOne({where: {partId}});

    await part.destroy();
  }

  async removeAll(userId: number | string): Promise<void> {
    await this.shoppingCartModel.destroy({where: {userId}});
  }
}
