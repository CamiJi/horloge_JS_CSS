$(document).ready(function(){
		console.log('Chargé ! ');

		var now = new Date();

		var heures=now.getHours();
		var minutes=now.getMinutes();
		var secondes=now.getSeconds();

		console.log ('Il est exactement '+heures+' heures '+minutes+' minutes '+secondes+' secondes');


		var aiguilles = [
			{
				'id' : 'heures',
				'angle': (heures * 30) + (minutes / 2)
			},
			{
				'id': 'minutes',
				'angle' : (minutes * 6)
			},
			{
				'id': 'secondes',
				'angle' : (secondes * 6)
			}
		];

		for (var i = 0; i < aiguilles.length; i++) {
				var id = aiguilles[i]['id'];
				var angle = aiguilles[i]['angle'];

				$('#'+id).css('transform', 'rotateZ('+angle+'deg)');
			};
});