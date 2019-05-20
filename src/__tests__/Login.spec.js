import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow, mount, render} from 'enzyme';
import Login from '../components/topdown/Login';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

it('エラーログが出ていないことの確認', () => {
  console.error = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(console.error).not.toHaveBeenCalled();
});

it('テキストボックス存在確認(ID)', () => {
  const wrapper = mount(<Login />);
  // ID テキストボックスがあるか確認
  expect(wrapper.find('input#id').length).toBe(1);
});

it('テキストボックス存在確認(PASSWORD)', () => {
  const wrapper = mount(<Login />);
  // ID テキストボックスがあるか確認
  expect(wrapper.find('input#password').length).toBe(1);
});

it('ログインボタン存在確認', () => {
  const wrapper = mount(<Login />);
  expect(wrapper.find('input#login').length).toBe(1);
});

it('Email以外の入力があった場合、エラーが表示されること', () => {
  const wrapper = mount(<Login />);
  // テキストボックス(ID)にTESTと入力
  wrapper
    .find('input#id')
    .first()
    .simulate('change', {target: {value: 'TEST'}});
  expect(wrapper.find('div#id-error').text()).toBe(
    'emailアドレスを入力してください。'
  );
});

it('Emailを入力した場合、エラーは表示されないこと', () => {
  const wrapper = mount(<Login />);
  // テキストボックス(ID)にtest@hoge.comと入力
  wrapper
    .find('input#id')
    .first()
    .simulate('change', {target: {value: 'test@hoge.com'}});
  expect(wrapper.find('div#id-error').length).toBe(0);
});
