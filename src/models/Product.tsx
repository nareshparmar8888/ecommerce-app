export default class ProductModel {
	public id: string;
	public name: string;
	public price: string;
	public description: string;
	public avatar?: string;

	public constructor() {
		this.id = "";
		this.name = "";
		this.price = "";
		this.description = "";
		this.avatar = "";
	}
}
