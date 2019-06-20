import expect from 'expect';
import reducer, { DISCONNECT_USER } from 'src/store/reducer';

describe('reducer', () => {
  it(`action DISCONNECT_USER on initialState should :
  - set state.isConnected to false
  - set state.loginMessage to Vous avez bien été déconnecté(e)
  - set state.loginStatus to disconnected
  - set username, passwordInput, passwordConfirmInput, firstNameInput, lastNameInput to empty string
  - set userId to 0 (default value)
  `, () => {
    let state;
    state = reducer(undefined, {type: DISCONNECT_USER });

    expect(state.isConnected).toEqual(false);
    expect(state.loginMessage).toEqual('Vous avez bien été déconnecté(e)');
    expect(state.loginStatus).toEqual('disconnected');
    expect(state.username).toEqual('');
    expect(state.passwordInput).toEqual('');
    expect(state.passwordConfirmInput).toEqual('');
    expect(state.userId).toEqual(0);
    expect(state.firstNameInput).toEqual('');
    expect(state.lastNameInput).toEqual('');

  });

  it(`action DISCONNECT_USER on a state with a connected user should :
  - set state.isConnected to false
  - set state.loginMessage to Vous avez bien été déconnecté(e)
  - set state.loginStatus to disconnected
  - set username, passwordInput, passwordConfirmInput, firstNameInput, lastNameInput to empty string
  - set userId to 0 (default value)
  `, () => {
    let state;
    const entryState = {
      username: 'john@oclock.io',
      passwordInput: 'thisisapassword',
      passwordConfirmInput: '',
      firstNameInput: 'Jérôme',
      lastNameInput: 'Henry',
      userId: 71,
      isConnected: true,
      loginMessage: 'Vous êtes connecté(e)',
      loginStatus: 'connected',
      // à cet endroit j'ai effacé une partie du state pour des raisons de lisibilité sur le dossier
    };
    state = reducer(entryState, {type: DISCONNECT_USER });

    expect(state.isConnected).toEqual(false);
    expect(state.loginMessage).toEqual('Vous avez bien été déconnecté(e)');
    expect(state.loginStatus).toEqual('disconnected');
    expect(state.username).toEqual('');
    expect(state.passwordInput).toEqual('');
    expect(state.passwordConfirmInput).toEqual('');
    expect(state.userId).toEqual(0);
    expect(state.firstNameInput).toEqual('');
    expect(state.lastNameInput).toEqual('');

  });
});
