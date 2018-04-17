import FirebaseApp from '../auth/FirebaseApp';

class DataBase {
  static database = FirebaseApp.database();

  static add(ref, data) {
    const newPromotion = this.database.ref(ref).push();

    newPromotion.set(data);
  }
}

export default DataBase;
