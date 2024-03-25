const parent = React.createElement("div",{id :"parent"} ,
               React.createElement("div",{id :"child"} ,
               [
                React.createElement("h1",{} ,"Hi Iam h1 Tag"),
                React.createElement("h2",{} ,"Hi Iam h2 Tag"),
                React.createElement("h3",{} ,"Hi Iam h3 Tag"),]),
               
                React.createElement("h1",{} ,"Hi Iam h1 Tag"),
                [
                    React.createElement("h2",{} ,"Hi Iam h2 Tag"),
                    React.createElement("h3",{} ,"Hi Iam h3 Tag")
            ]);
           
                          
               console.log(parent);

const heading =React.createElement("h1" , {id:"head"} ,"Hello world This is React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);