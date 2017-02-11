/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

class About extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>Link for Bookmark:</p>
          <a href={"javascript:(function(){var w=window,l=w.location,d=w.document,s=d.createElement('script'),e=encodeURIComponent,o='object',n='bookmarkletAPI',u='http://localhost:3000/bookmarklet',r='readyState',T=setTimeout,a='setAttribute',g=function(){console.log('g');d[r] && d[r] != 'complete' ? T(g,200) :!w[n] ? (s[a]('charset','UTF-8'),s[a]('src',u+'.js'),d.body.appendChild(s), f() ) : f() }; f=function(){ !w[n] ? T(f,200) :w[n].createPopup()}; w[n] ? w[n].createPopup():g()})()"}> Add To My Wish List </a>
          <p> Основной алгоритм работы приложения </p>
          <ul>
            <li>Создание и удаление списокв пожелайний </li>
            <li>Открытие формы добавления элементов по клику букмарклета </li>
            <li>Поиск всех картинок на сайте для отображения в форме и записи в базу данных </li>
            <li>Валидация полей ввода данных </li>
            <li>Создание и удаление пожеланий из формы букмарклета</li>
            <li>Перемещенеи элементов между списками</li>
            <li>Поиск элементов в списках</li>
            <li>Алерт при попытке добавить уже имеющуюся в базе запись</li>
            <li>Алерт при попытке добавить существующий лист желаний</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
