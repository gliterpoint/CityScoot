(
	function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "../data/routes.json", true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
				var routes = JSON.parse(xhr.responseText);
				let html = "";
				routes.map((route,idx) => {
					html += `<tr>
					<th scope="row">${route.id}</th>
					<td>${route.name}</td>
					<td>${route.day}</td>
					<td>${route.time}</td>
					<td>${route.highlights}</td>
					<td><a href="http://127.0.0.1:5500/route.html?id=${route.id}" class="btn btn-primary">Details</a></td>
 				</tr>`;
				}, this);
				var routesTable = document.getElementById("routes-table").getElementsByTagName("tbody")[0];
				routesTable.innerHTML = html;
			}
		}
		xhr.send();
	}
)();



