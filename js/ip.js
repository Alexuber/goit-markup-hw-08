function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "0000000";
  }
}

function showPosition(position) {
  const pos = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };

  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pos),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("content loaded");
    });
}
