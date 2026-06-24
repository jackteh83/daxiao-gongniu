const root =
ReactDOM.createRoot(
document.getElementById("root")
);

function App(){

return React.createElement(
"div",
{
className:"container"
},
[
React.createElement(
"div",
{
key:1,
className:"title"
},
"🐂 Bull Battle"
),

React.createElement(
"div",
{
key:2,
className:"subtitle"
},
"GitHub Build Test"
),

React.createElement(
"button",
{
key:3,
className:"button",
onClick(){

alert(
"Framework Loaded Successfully"
);

}
},
"Start Game"
)
]
);

}

root.render(
React.createElement(App)
);
