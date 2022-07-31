// JavaScript AJAX to Read Individual Data of Tour And Display Data on the route.html Dynamically 

const routesPanel = document.getElementById("route-panel");

async function FetchRouteData() {
	const res = await fetch("../data/routes.json");
	const routes = await res.json();
	OutputHTML(routes);
}

const OutputHTML = (routesData) => {
	let params = (new URL(document.location)).searchParams;
	let routeid = params.get('id');
	const html = routesData.filter(route => {
		return route.id == routeid
	}).map(data => {
		return `
		<div class="panel-heading">
			<h4 class="panel-title">Route Details <span>${data.id}</span></h4>
		</div>
		<div class="panel-body">
			<div class="col">
				<div class="card">
					<img
						class="card-img-top"
						src="${data.img_url}"
						alt="Card image"
					/>
					<div class="card-body">
						<h4 class="card-title">Name: ${data.name}</h4>
						<p class="card-text">
							<b> Time: </b> ${data.time}
						</p>
						<p class="card-text">
							<b> Day: </b> ${data.day}
						</p>
						<p class="card-text">
							<b> GPS Location: </b> ${data.start_lat}, ${data.start_lng}, ${data.end_lat}, ${data.end_lng}
						</p>
						<p class="card-text"><b> highlights:</b> ${data.highlights}</p>
					</div>
				</div>
			</div>
		</div>
		`
	})
	routesPanel.innerHTML = html	
};

FetchRouteData();




