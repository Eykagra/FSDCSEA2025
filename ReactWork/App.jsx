const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);

// const h2 = React.createElement("h2",{},"Abes Engineering College");
// const li1 = React.createElement("li",{},"React");
// const li2 = React.createElement("li",{},"Java");
// const li3 = React.createElement("li",{},"Python");
// const ul = React.createElement("ul",{style:{backgroundColor:'black',color:"white"}},li1,li2,li3)
// const img = React.createElement("img",{src:"https://picsum.photos/200/200",style:{borderRadius:'50%'}});
// const myname = React.createElement('h1',{},"Eykagra Gangwar");
// const wp = React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'100px'}},img,myname);
// const hr = React.createElement('hr',{})
// const wrapper = React.createElement('div',{},h2,wp,hr,ul);
// root.render(wrapper);
const wrapper = (
  <div>
    <h2>Abes Engineering College</h2>
    <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
      <img src="https://picsum.photos/200/200" style={{ borderRadius: '50%' }} />
      <h1>Eykagra Gangwar</h1>
    </div>
    <hr />
    <ul style={{ backgroundColor: 'black', color: 'white' }}>
      <li>React</li>
      <li>Java</li>
      <li>Python</li>
    </ul>
  </div>
);
root.render(wrapper);