import { renderHook } from '@testing-library/react';
import { useClickOutside } from '../useClickOutside';
import { useRef } from 'react';

describe('useClickOutside', () => {
  let container: HTMLDivElement;
  let button: HTMLButtonElement;
  const handler = jest.fn();

  beforeEach(() => {
    container = document.createElement('div');
    button = document.createElement('button');
    container.appendChild(button);
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.clearAllMocks();
  });

  it('deve chamar o handler quando clicar fora do elemento', () => {
    const ref = { current: container };
    renderHook(() => useClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it('não deve chamar o handler quando clicar dentro do elemento', () => {
    const ref = { current: container };
    renderHook(() => useClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
    });
    button.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('deve remover os event listeners ao desmontar', () => {
    const ref = { current: container };
    const { unmount } = renderHook(() => useClickOutside(ref, handler));

    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(2);
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchstart', expect.any(Function));
  });
}); 