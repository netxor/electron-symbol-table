import * as global from './global';

export const identifiersLength = () => {
  dialog.showMessageBox({
    type: 'info',
    message: 'Считано ' + global.list.length + ' идентификаторов',
    buttons: ['OK']
  });
}

export const inputToFind = () => {
  dialog.showMessageBox({
    type: 'error',
    message: 'Введите искомое значение',
    buttons: ['OK']
  });
}
