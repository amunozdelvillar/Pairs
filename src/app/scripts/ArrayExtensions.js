

var AEx = Array.prototype; //Array Extention
//consider using the each() method for iterating through the array  for each of the functions

var _isFunction = function (spec) { //check if spec is a function
        return typeof spec === 'function';
    };

var nonFunction = function (spec) { //check if spec is a value and return it as a funct
    
      function compare(index) {
        return spec === index;
      }

      return compare;

    };
var _isArray = function(val){
	if( Object.prototype.toString.call(val) === '[object Array]' )
    return true;
};

AEx.each = function(callback) {
	//this has ref to the object that the function was invoked upon

	for (var i = 0; i < this.length; i++) {
		callback.call(this,this[i],i);
	}
};

AEx.where = function (callback) {
	var buffer = [];
	for(var i = 0; i<this.length; i++){

		if(callback.call(this, this[i])){
			buffer.push(this[i]);
		}
	}
	return buffer;
};

AEx.any = function(callback){

    if (_isFunction(callback)) {
		callback = callback;
    }else if(nonFunction(callback)){
		callback = nonFunction(callback);
    }

	for(var i = 0; i<this.length; i++){

		if(callback.call(this, this[i])){
			return true;
		}
	}
	return false;
};

AEx.select = function(callback){
	var buffer = [];
	for(var i = 0; i<this.length; i++){

		var ans = callback.call(this, this[i]);
		buffer.push(ans);
	}
	return buffer;
};

AEx.take = function(howMany, callback){
	var buffer = [];
	var check = 0;
	for(var i = 0; i<this.length; i++){

		if (check >= howMany) return buffer;
		
		var ans = callback.call(this, this[i]);
		
		if(ans){
			buffer.push(this[i]);
			check++;
		}
	}
	return buffer;
};


AEx.skip = function(howMany){
	
	var newbuffer = [];
	newbuffer = this.splice(howMany,this.length);
	return newbuffer;
		
	
};

AEx.first = function(callback){
	var buffer = [];
	// if (_isFunction(callback)) {};

	for(var i = 0; i<this.length; i++){
		
		var ans = callback.call(this, this[i]);
		
		if(ans){
			return this[i];
		}
	}
};

AEx.last = function(callback){
	var buffer = [];

	for (var i = this.length; i >= 0; i--) {
		var ans = callback.call(this, this[i]);
		
		if(ans){
			return this[i];
		}
	}
};

AEx.count = function(callback){
	var cont = 0;
	if (_isFunction(callback)) {
		callback = callback;
    } else{ return this.length;
    }

	for (var i = 0; i<this.length; i++) {
		if(callback.call(this, this[i])){
			cont++;
		}
	}
	return cont;
};

AEx.index = function(callback){

	if (_isFunction(callback)) {
		callback = callback;
    }else{
		callback = nonFunction(callback);
    }
	for (var i = 0; i<this.length; i++) {
		if(callback.call(this, this[i])){
			return i;
		}
	}
	return -1;

};

AEx.pluck = function(prop){


	callback = nonFunction(prop);
	var buffer = [];
	for (var i = 0; i<this.length; i++) {
		if(callback.call(this, this[i])){
			buffer.push(this);
		}
	}
	return buffer;

};


var people = [
	{name: 'pedro', age: 19 },
	{name: 'juan', age: 15 },
	{name: 'pablo', age: 16 },
	{name: 'pancho', age: 20 },
	{name: 'topo', age: 18 }
];


// var logPerson = function(x, i){	console.log((i + 1) + '.'+ x.name + ' is ' + x.age + ' years old')};

var peopleSkills = [
{name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
{name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
{name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
];



console.log('Hire the following guys');

 // 1. EACH
// people.each(function(x,i){
// console.log((i + 1) + '.- ' + x.name + ' is ' + x.age +  ' years old');
// });

var logPerson = function(x, i){
  console.log((i + 1) + '.­ ' + x.name + ' is ' + x.age + ' years old');
};


// peopleSkills.where(function(dev){
//	var skills = dev.skills.where(function(skill) { return skill === 'PHP'; });
//	return skills.length === 0;
// }).each(logPerson);

peopleSkills
			.where(function(dev){
			    return !dev.skills.any('C#');
			})
			.each(logPerson);


peopleSkills
    .where(function(dev){
        return !dev.skills.any('C#');
    })
    .select(function(dev) {
        return dev.name;
    })
    .each(function(x){
        console.log(x);
    });


var children = [
    {name: 'ana', sex: 'f'},
    {name: 'fosto', sex: 'm'},
    {name: 'jane', sex: 'f'},
    {name: 'yadi', sex: 'f'},
    {name: 'lili', sex: 'f'},
    {name: 'bany', sex: 'm'},
    {name: 'rod', sex: null},
    {name: 'auro', sex: 'f'},
    {name: 'martin', sex: 'm'}];

// console.log('PROBLEM #5');
// children
// .take(3, function(x){ return x.sex == 'f'; })
// .each(function(x){ console.log(x.name); });

// console.log("PROBLEM #6");
// children
//     .skip(3).each(function(x){ console.log(x.name); });


// console.log("PROBLEM #7");
// // console.log(children.first().name); NEED TO FIX THIS
// console.log(children.first(function(x){ return x.sex == 'm';}).name);


// console.log("PROBLEM #8");
// // console.log(children.first().name); NEED TO FIX THIS
// console.log(children.first(function(x){ return x.sex == 'f';}).name);


// console.log("PROBLEM #9");
// console.log(children.count() +  ' children');
// console.log(children.count(function(x){ return x.sex === 'f';}) + ' are female');


// console.log("PROBLEM #10");
// console.log(children.index( function(x) { return x.name == 'bany'; }));
// console.log(children.index( function(x) { return x.name == 'mark'; }));
// console.log([1,3,5,7,9,11].index(7));

// console.log("PROBLEM #11");
// children.pluck('name').each(function(x){ console.log(x);});