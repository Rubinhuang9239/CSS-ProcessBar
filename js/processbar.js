var processBar = {}

		processBar.attach = function(element){
			var newProcessBar = document.createElement("div");
			newProcessBar.setAttribute("class","process-bar-wrap");
			newProcessBar.innerHTML = "<div class='process-bar-fill'></div>"
			element.appendChild(newProcessBar);
		}

		processBar.update = function(element, percent, error){
			var targetProcessbar = element.getElementsByClassName("process-bar-wrap")[0];
			if(error){ percent = 100; }
			targetProcessbar.children[0].style.width = percent + "%";

			if(percent >= 100){
				setTimeout(function(){
					targetProcessbar.style.height = "24px";
					targetProcessbar.children[0].style.lineHeight = "24px";

					if(error){
						targetProcessbar.children[0].style.backgroundColor = "#E74C3C";
						targetProcessbar.children[0].innerHTML = "Oops... Upload Failed.";
					}
					else{
						targetProcessbar.children[0].style.backgroundColor = "#2ABB9B";
						targetProcessbar.children[0].innerHTML = "Done Uploading";
					}
					
					setTimeout(function(){
						processBar.detach(element);
					},1200);
				},500);
			}
		}

		processBar.detach = function(element){
			//to make sure all bar been removed//
			var targetProcessbar = element.getElementsByClassName("process-bar-wrap");

			for(i = 0; i < targetProcessbar.length; i++){
				var currentTarget = targetProcessbar[i];
				element.removeChild(currentTarget);
			}
		}