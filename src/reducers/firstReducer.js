
const initialState = {
  url:'wss://stream.binance.com:9443/ws/bnbusdt@trade',
  imgURL:'https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png',
  name:'Binance',
};

export function firstReducer(state = initialState , action) {
  switch (action.type) {
    case "CHANGE_TOKEN":
      return { url: action.url, name: action.name , imgURL: action.imgURL };
    default:
      return state;
  }
}

