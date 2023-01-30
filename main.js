window.addEventListener("keydown", myKeyDown);

var canvas= new fabric.Canvas ("myCanvas");

 blockY=1;
 blockX=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "Img";

function newimage(getImage){



	fabric.Image.fromURL(getImage, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:blockY,
		 left:blockX
		});
	
		canvas.add(block_image_object)
	
	})
	}
	// para enviar imagens


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if (keyPressed == "69") {
	blockX = 150;

	newimage("rr1.png")
	console.log("i")
}





		// enviar ranger escarlate
	
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
		newimage("gr.png")
		console.log("v")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
        newimage("yr.png")
		console.log("a")

	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		newimage("pr.png")
		console.log('r')
	}
	if(keyPressed == "73")
	{
		blockX = 700;
	// enviar ranger índigo


	newimage("br.png")
	console.log("e")
	}
	   


}

