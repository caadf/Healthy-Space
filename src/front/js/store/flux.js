const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			/* ACA VA MI CODIGO */
			access_token: null,
			apiURL: '',
			name: '',
			email: '',
			password: '',
			password_confirm: '',
			active: true,

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			/* Aca va mi codigo */
			handleSbmitRegister: e  => {
				e.preventdDefault()
				const { name, email, password, active, apiURL } = getStore()

				const { getFetch } = getActions()
                const url = `${apiURL}/api/register`
                const raw = JSON.stringify({
                    name, email, password, active
                })
				const options = {
                    method: 'POST',
                    body: raw,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const request = getFetch(url, options)
                request.then((response) => response.json()).then((datos) => {
                    console.log(datos)
                    toast.success(datos.success)
                    setStore({
                        name: '',
                        email: '',
                        password: '',
                        password_confirm: '',
                        active: true,
                    })
                }).catch(error => console.log(error))

            },

			handleChange: e => {
				const { name, value } = e.target
				setStore({
					[name]: value
				})
			},
		}
	};
};

export default getState;
