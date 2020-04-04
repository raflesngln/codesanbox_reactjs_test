// Nilai awal contactID
// const initialState={
//   value:0,
//   nama:'Raf',
//   age:18
// }
let currentID = 0;
let idpr=0;


// contact actions
  export function gantiNama(data) {
            const { names } = data;
            console.log('INI STATE NAMA '+names)
            return {
              type: "CHANGE_NAMA",
              nama:names
            };
          }
  export function tambahUmur(data) {
            const { jumlah } = data;
            return {
              type: "INCREASE_AGE",
              jumlah
            };
          }

  export function kurangiUmur(data) {
            const { jumlah } = data;
            console.log('INI STATE NAMA '+data)
            return {
              type: "DECREASE_AGE",
              jumlah
            };
          }

  export function updateProduct(product) {
            const { nmProduct, descProduct,stockProduct,priceProduct } = product;
            idpr += 1;

            return {
              type: "UPDATE_PRODUCT",
              idProduct: idpr,
              nmProduct,
              descProduct,
              stockProduct,
              priceProduct
            };
          }

  export function removeProduct(idProduct) {
            return {
              type: "DELETE_PRODUCT",
              idProduct
            };
    }
export function LoginStatus(idProduct) {
      return {
        type: "DELETE_PRODUCT",
        idProduct
      };
}