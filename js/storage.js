// JavaScript LocalStorage to Read All Data And Delete Data 
(
	function(){
        const localstore = window.localStorage
		const favroutesTable = document.getElementById("fav-route-table").getElementsByTagName("tbody")[0];
		
		//Read All Storage Data
        if (localstore.key("firebase:host:cityscoot-f7eb7-default-rtdb.firebaseio.com") != null) {
             localstore.removeItem("firebase:host:cityscoot-f7eb7-default-rtdb.firebaseio.com")           
        } 
        if (localstore.key("firebase:previous_websocket_failure") != null) {
             localstore.removeItem("firebase:previous_websocket_failure")           
        } 
        var route_values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        while ( i-- ) {
            route_values.push( localStorage.getItem(JSON.parse(keys[i])));
        }

        //Display All Storage Data
        let html = "";
        route_values.map(val => {
            const storedVal = JSON.parse(val)
            html += `<tr>
                <th scope="row">${storedVal.id}</th>
                <td>${storedVal.name}</td>
                <td>${storedVal.day}</td>
                <td>${storedVal.time}</td>
                <td>${storedVal.highlights}</td>
                <td><a href="http://127.0.0.1:5500/route.html?id=${storedVal.id}" class="btn btn-primary">Details</a></td>
                <td><button type="button" id=${storedVal.id} class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Delete Favourite</button></td>
            </tr>`;
        })
        favroutesTable.innerHTML = html;

        // Delete Data from Local Storage
        const favdelBtn = document.querySelectorAll("#fav-route-table button")
        const closeModal = document.getElementById("close-modal")
        const exampleModalCenter = document.getElementById("exampleModalCenter")

        for(var i=0; i < favdelBtn.length; i++){
            favdelBtn[i].addEventListener('click', function(e){
                route_values.filter(routeVal =>{
                    const parsedVal =  JSON.parse(routeVal)
                    if(parsedVal.id == e.target.id){
                      localstore.removeItem(`${parsedVal.id}`) 
                      closeModal.addEventListener('click', function(){
                        window.location.reload() 
                    })
                      exampleModalCenter.addEventListener('click', function(){
                        window.location.reload() 
                    })
                    }
                })
            })
        }
	}	
)();



