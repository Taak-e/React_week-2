// vocas.js
import { db } from "../../firebase";
import { collection, getDoc, getDocs, addDoc, deleteDoc, doc, arrayRemove } from "firebase/firestore";


// Actions
const LOAD = 'vocas/LOAD';
const CREATE = 'vocas/CREATE';
const REMOVE = 'vocas/REMOVE';
// const UPDATE = 'my-app/widgets/UPDATE';




const initialState = {
//    list: ['Voca', '발음', '의미', '예시', '예시']
  list: [{title: "Voca", pro: "발음", jus: "의미", ex1: '예시', ex2: '예시'}]
}
// map 객체를 다시 배열로

// Action Creators
export function loadVoca(voca_list) {
    return { type: LOAD, voca_list };
}


export function createVoca(voca) {
    return { type: CREATE, voca };
}

export function deleteVoca(index) {
    return { type: REMOVE, index };
}



// middlewares - 비동기 통신을 위한
export const loadVocaFB = () => {
    return async function (dispatch) {

    const voca_data = await getDocs(collection(db, "voca"));
    console.log(voca_data);

    let voca_list = [];
    voca_data.forEach((v) => {
        console.log(v.data)
        voca_list.push({id:v.id, ...v.data()});
    });

        dispatch(loadVoca(voca_list));
    }
}

export const addVocaFB = (voca) => {
    return async function(dispatch) {
       const docRef = await addDoc(collection(db, "voca"), voca);
    //    const _voca = await getDoc(docRef);
       const voca_data = {id: docRef.id, ...voca};
      
       console.log(voca_data);

       dispatch(createVoca(voca_data));

    };
};

export const deleteVocaFB = (voca_id) => {
    return async function (dispatch, getState) {

        // if(!voca_id) {
        // return;
        // }

        const docRef = await doc(db, "voca", voca_id);
        await deleteDoc(docRef);
        const _voca_list = await getState().vocas.list;
        const voca_index = _voca_list.findIndex((b) => {

          return b.id === voca_id;
        });
        
        console.log(voca_index);
        dispatch(deleteVoca(voca_index));
        
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "vocas/LOAD": {
            return {list: action.voca_list};
        }
        case "vocas/CREATE": {
            const new_voca_list = [...state.list, action.voca];
            return {list : new_voca_list};
        }
        case "vocas/REMOVE": {
            const arr = [...state.list] 
            arr.splice(action.index, 1)
            return {list : arr};
        }

        default: 
            return state;
    }
}




// 비동기 통신 시 사용
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }