let data = [
    {
        name: "Home",
        path: "/",
      },
      {
        name: "Find a doctor",
        path: "/doctors",
      },
      {
        name: "Apps",
        path: "/applications",
      },
      {
        name: "Testimonials",
        path: "/testimonials",
      },
      {
        name: "About us",
        path: "/about",
      },
]

function addId(arr){
    let id = 1;
    return arr.map(el =>  {
        el.id = id++;
        return el;
    })
}

export default addId(data);
