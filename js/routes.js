// JavaScript AJAX to Read Data And Display on the Dynamic HTML Table 
(
	function(){
		const xhr = new XMLHttpRequest();
		const localstore = window.localStorage
		xhr.open("GET", "../data/routes.json", true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
				const routes = JSON.parse(xhr.responseText);
				let html = "";
				routes.map((route) => {
					html += `<tr>
					<th scope="row">${route.id}</th>
					<td>${route.name}</td>
					<td>${route.day}</td>
					<td>${route.time}</td>
					<td>${route.highlights}</td>
					<td><a href="http://127.0.0.1:5500/route.html?id=${route.id}" class="btn btn-primary">Details</a></td>
					<td><button type="button" id=${route.id} class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add to Favourite</button></td>
 				</tr>`;
				}, this);
				const routesTable = document.getElementById("routes-table").getElementsByTagName("tbody")[0];
				routesTable.innerHTML = html;

				// Adding Tour to Local Storage
				const favBtn = document.querySelectorAll("#routes-table button")
				for(var i=0; i < favBtn.length; i++){
					favBtn[i].addEventListener('click', function(e){
						routes.filter(route =>{
							return route.id == e.target.id
						}).map(data =>{
							console.log(data);
							localstore.setItem(`${data.id}`, JSON.stringify(data))
						})
					})
				}
			}
		}
		xhr.send();
	}
	
)();



