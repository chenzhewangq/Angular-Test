exports.request = function(app,queryResponse){

	app.post('/om/resource/show/basisShowQuery',function(req,res){
		console.log('...');
		// var perData = devidePage(req.body,queryResponse.BasisShowData);
		
			var resData  = {
				success:true,
				data: {
					page:{totalCount:11},
					list:queryResponse.BasisShowData
				}
			};
			res.send(resData);
		
	});

};