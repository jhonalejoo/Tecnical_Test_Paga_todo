import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getBanks } from '../../../api/bank';
import { getBanksErrors, getBanksLoading, getBanksSuccess } from './reducers';

function* getBanksFlow(action) {
    try {
        const banks = yield call(getBanks);
        yield put(getBanksSuccess(banks));
    } catch (error) {
        yield put(getBanksErrors(error));
    }
}
function* bankWatcher() {
    yield all([
        takeEvery(getBanksLoading.type, getBanksFlow)
    ])
}

export default bankWatcher;