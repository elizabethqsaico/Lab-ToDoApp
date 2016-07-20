$(document).ready(initApp);

function initApp() {
	var tareaBtnAdd = document.getElementById("tareaBtnAdd");
	tareaBtnAdd.addEventListener("click", addTarea);
}
function addTarea(){
	var tareaLista = document.getElementById("tareaLista");
	var tareaDescrip = document.getElementById("tareaNueva").value;
	if(tareaDescripcion != ""){
		var tareaListaItem = document.createElement("div");
		tareaListaItem.setAttribute("class", "input-group")
		tareaListaItem.setAttribute("id", "tareaListaItem");
		var spanCheckBox = document.createElement("span");
		spanCheckBox.setAttribute("class", "input-group-addon");
		var tareaCheckbox = document.createElement("input");
		tareaCheckbox.setAttribute("type", "checkbox");
		tareaCheckbox.setAttribute("id", "tareaCheckbox");

		tareaCheckbox.addEventListener("click", function(){
			if(tareaCheckbox.checked != true){
				tareaDescripcion.classList.remove("line-through");
				tareaDescripcion.classList.add("none");
			}
			else{
				tareaDescripcion.classList.remove("none");
				tareaDescripcion.classList.add("line-through");
			}
		});
		
		var tareaDescripcion = document.createElement("p"); 
		tareaDescripcion.setAttribute("class", "form-control");
		tareaDescripcion.setAttribute("id", "tareaDescripcion");
		tareaDescripcion.innerHTML = tareaDescrip;
		
		var spanBtnDelete = document.createElement("span");
		spanBtnDelete.setAttribute("class", "input-group-addon");
		var aDelete = document.createElement("a");
		aDelete.setAttribute("href", "#");
		var spanTrash = document.createElement("span");
		spanTrash.setAttribute("class", "glyphicon glyphicon-trash");

		aDelete.appendChild(spanTrash);
		spanBtnDelete.appendChild(aDelete);
		spanCheckBox.appendChild(tareaCheckbox);

		tareaLista.appendChild(tareaListaItem);
		tareaListaItem.appendChild(spanCheckBox);
		tareaListaItem.appendChild(tareaDescripcion);
		tareaListaItem.appendChild(spanBtnDelete);

		spanBtnDelete.addEventListener("click", function(){
			tareaListaItem.parentNode.removeChild(tareaListaItem);
		});
	}
} 


