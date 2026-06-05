window.addEventListener("load", function () {

	// let section = document.querySelectorAll("section")
	
	let wrapper = document.getElementById("root")
	
	let sideBar = document.querySelector("#lastColumn")

	let aside = document.querySelector("#aside")

	let heading = document.querySelectorAll(":is(h1,h2,h3,h4,h5,h6)[title]")

	let search = document.getElementById("searchBar")

	var isActive = true; // default set enable

	/* aside open function */

	function open() {
		sideBar.style.display = `block`;
		if (window.innerWidth > 1100) {
			wrapper.style.gridTemplateColumns = `auto 400px`;
		}
		isActive = true;
	}

	/* aside close function */

	function close() {
		sideBar.style.display = `none`;
		if (window.innerWidth > 1100) {
			wrapper.style.gridTemplateColumns = `1fr`;
		}
		isActive = false;
	}

	// --------------------------
	/* window resize function */
	// --------------------------

	window.addEventListener("resize", function () {

		(window.innerWidth < 1100)? close() : open()
	})

	// ---------------------------------------------------------------------------------
	/* aside function : on click toggle button if isActive than close else open aside */
	// ---------------------------------------------------------------------------------
	
	document.getElementById("toggleBtn").onclick = () => isActive ? close() : open()
	
	// ----------------------------------------
	/* theme change function to toggle class */
	// ----------------------------------------

	document.getElementById("themeBtn").onclick = () => {

		document.body.classList.toggle("darkTheme");
	}

	// -----------------------
	/* side bar link button */
	// -----------------------

	heading.forEach((element, index) => {

		element.id = "git" + index

		let anchor = document.createElement("a")

		anchor.href = `#${element.id}`
		anchor.classList.add('btn')
		anchor.innerText = element.title

		aside.append(anchor)
	})

	// -----------------------
	/* search bar function */
	// -----------------------
	
	search.onkeyup = function () {
		// console.log(search.value)
		document.querySelectorAll("#aside .btn").forEach((element) => {
			// console.log(element.innerText.toUpperCase().trim().includes(search.value.toUpperCase())
			if (element.innerText.toUpperCase().trim().includes(search.value.toUpperCase())) {
				element.style.display = "block";
			} else {
				element.style.display = "none";
			}
		})
	}

	// ----------------------
	/* btn on click close */
	// ----------------------

	document.querySelectorAll("#aside .btn").forEach((element) => {
		element.onclick = function () {
			if (window.innerWidth <	 1100) {
				close()
			}
		}
	})

	document.title = `MayankDevil`;
})