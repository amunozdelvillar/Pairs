Array.prototype.each = function(callback) {
	for (var i = 0; i < this.length; i++) {
		callback.call(this,this[i],i);
	}
};

Array.prototype.where = function (callback) {
	var buffer = [];
	for(var i = 0; i<this.length; i++)	{
		if(callback.apply(this,this[i])){
			console.log('menigue!');
		}
	}
};



var people = [
	{name: 'pedro', age: 19 },
	{name: 'juan', age: 15 },
	{name: 'pablo', age: 16 },
	{name: 'pancho', age: 20 },
	{name: 'topo', age: 18 }
];


var logPerson = function(x, i){	console.log((i + 1) + '.'+ x.name + ' is ' + x.age + ' years old')};

var people = [
{name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
{name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
{name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
];



console.log('hire the following guys');

people.where(function(dev){
	var skills = dev.skills.where(function(skill) { return skill == 'PHP'; });
	return skills.length == 0;
});