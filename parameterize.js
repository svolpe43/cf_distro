// parameterize.js

var fs = require('fs');

var templates_dir = 'templates/';
var params_dir = 'parameters/';

fs.readdir(templates_dir, function(err, data){
	if(err){
		console.log(err);
	}else{
		for(var i = 0; i < data.length; i++){
			c(data[i]);
		}
	}
});

function c(template_name){

	fs.readFile(templates_dir + template_name, function(err, temp_txt){
		if(err){
			console.log(err);
		}else{

			var template_params = JSON.parse(temp_txt).Parameters;
			var params = strip_params(template_params);
			var file = params_dir + template_name;

			var param_string = readablize(JSON.stringify(params));

			fs.exists(file, function(exists) {
				if(exists) {
					fs.unlink(file, function(err, data){
						write_param_file(file, param_string);
					});
				}else{
					write_param_file(file, param_string);
				}
			});
		}
	});
}

function readablize(string){
	var readable = string.replace(/,/g, ',\n\t').replace(/:/g, ' : ');
	readable = readable.replace(/\{/g, '{\n\t').replace(/\}/g, '\n}\n');

	return readable;
}

function write_param_file(file, string){
	fs.writeFile(file, string, function(err, data){
		if(err){
			console.log(err);
		}
	});
}

function strip_params(template_params){
	var parameters = {};
	for(var param in template_params){
		if(template_params.hasOwnProperty(param)){
			if(template_params[param].Default){
				parameters[param] = template_params[param].Default;
			}else{
				parameters[param] = '';
			}
		}
	}
	return parameters;
}