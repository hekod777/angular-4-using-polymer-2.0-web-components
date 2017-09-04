interface Point {
	x: string;
	y: number;
}

class jjj implements Point {
	public x = 'no error?';
	public y = 200;
}


class Test{
	private x: string = 'asdasd';
	public y: number[] = [1,2];
	protected z: any[] = [1,2,'ddd'];
	constructor(){
	}
	fnc() {};
	protected dd: Point;
}

class Person{
	name: string;
	age: number;
	constructor (name, age){
		this.name = name;
		this.age = age;
	}
}

const peter = new Person('fat',111);



