var routesTable = document.getElementById("routes-table").getElementsByTagName("tbody")[0];

async function FetchRouteData() {
	const res = await fetch("../data/routes.json");
	const routes = await res.json();
	outputHTML(routes);
}
const outputHTML = (routesData) => {
	const html = routesData
		.map((route) => {
			return `<tr>
            <th scope="row">${route.id}</th>
            <td>${route.name}</td>
            <td>${route.day}</td>
            <td>${route.time}</td>
            <td>${route.highlights}</td>
            <td>
                <a href="#" class="btn btn-primary">Book Now</a>
            </td>
        </tr>`;
		})
		.join("");

	routesTable.innerHTML = html
	console.log(html);
};
FetchRouteData();
