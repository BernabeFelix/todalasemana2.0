import FirebaseApp from '../auth/FirebaseApp';

class DataBase {
  static database = FirebaseApp.database();

  static async add(ref, data) {
    const newPromotion = this.database.ref(ref).push();

    return await newPromotion.set(data);
  }

  static update = async (ref, data) =>
    await this.database.ref(ref).update(data);

  static get = async (ref, onSuccess) => await DataBase.database.ref(ref).once('value', onSuccess);
}

export default DataBase;
