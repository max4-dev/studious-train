import { ApiProperty } from "@nestjs/swagger";

class ShoppingCartItem {
  @ApiProperty({example: 1})
  id: number;

  @ApiProperty({example: 'Modi harum.'})
  name: string;

  @ApiProperty({example: 3202})
  price: number;

  @ApiProperty({example: "https://loremflickr.com/640/480?lock=6028345439420416?random=445238225131986291978943703268"})
  image: string;

  @ApiProperty({example: 1})
  in_stock: number;

  @ApiProperty({example: "dsa&Maury"})
  parts_manufacturer: string;

  @ApiProperty({example: "Chaffoteaux&Maury"})
  boiler_manufacturer: string;

  @ApiProperty({example: 1})
  userId: number;

  @ApiProperty({example: 34})
  partId: number;

  @ApiProperty({example: 0})
  count: number;

  @ApiProperty({example: 3202})
  total_price: number;

  @ApiProperty({example: "2023-06-30T23:31:53.747Z"})
  updatedAt: string;

  @ApiProperty({example: "2023-06-30T23:31:53.747Z"})
  createdAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCartResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({example: 1})
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({example: 1})
  count: number;
}
export class TotalPriceResponse {
  @ApiProperty({example: 1000})
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({example: 1000})
  total_price: number;
}