import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ul>
            <li>
              <span style={{ color: 'red' }}>О себе:</span> Свитчер с завода, буквально. Образование инфобез. Красные
              дипломы. В 2018 осознал, что занимаюсь не тем, чем хочу и занялся самообучением. После 5 лет обучения
              вкатился в крупную IT компанию через стажировку. Повезло. Без стажировки работу искал месяца 3, откликаясь
              только на вакансии компаний, чьими услугами я сам пользуюсь (ozon, avito, топ-3 банка, топ-3 мобильных
              оператора, etc). После месяца стажировки получил оффер сразу мидла. Работаю 9 мес.
              <br />
              <span style={{ color: 'red' }}>Цели на обучение:</span> закрыть пробелы по React и его экосистеме, если
              где-то имеются, стиснув зубы использовать nvim в качестве ide, чтобы прокачаться в нём;
              <br />
              <span style={{ color: 'red' }}>Цели после обучения:</span> убедиться, что React всё таки умирает, и для
              себя для души начать изучать rust/zig и htmx;
              <br />
              <span style={{ color: 'red' }}>Через 3 года:</span> коммерческая разработка на технологиях для души.
            </li>

            <li>
              <b>Frontend</b>
              <ul>
                <li>ES5/ES6+</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Redux</li>
                <li>React Router</li>
              </ul>
            </li>

            <li>
              <b>Backend</b>
              <ul>
                <li>Node.js</li>
                <li>NPM</li>
                <li>Express</li>
                <li>авторизация (сессии (cookie-session/express-session), JWT)</li>
                <li>шаблонизатор EJS, EJS-MATE</li>
                <li>Mongo (mongodb/mongoose)</li>
                <li>SQL</li>
              </ul>
            </li>

            <li>
              <b>Сеть и браузер</b>
              <ul>
                <li>модель TCP/IP</li>
                <li>протокол HTTP</li>
                <li>cache-control</li>
                <li>браузерные политики SOP и CORS</li>
                <li>сетевые запросы (XMLHttpRequest, fetch, axios, long polling, websocket, server sent events)</li>
                <li>хранение данных в браузере (cookie, localstorage, sessionstorage)</li>
              </ul>
            </li>

            <li>
              <b>Семантическая отзывчивая (резиновая) и адаптивная (по брейкпоинтам) верстка макетов Figma</b>
              <ul>
                <li>float/flex/grid</li>
                <li>Изоляция CSS стилей - БЭМ naming или CSS модули</li>
                <li>анимации, CSS фильтры</li>
                <li>препроцессор SASS (SCSS)</li>
                <li>спрайтовые background изображения (svg-stack)</li>
                <li>отзывчивые CSS свойства (CSS locks («шлюзы»))</li>
                <li>
                  использую Gulp – собственный конфиг (минификация кода, замена форматов на webp, сжатие изображений,
                  сборка webpack, конвертация шрифтов, создание SVG спрайтов), в том числе c плагинами, написанными и
                  опубликованными мною в npm, и используемыми другими разработчиками
                </li>
                <li>
                  {' '}
                  Дополнительно: viewport, logical pixel buckets, density independent pixel, решение проблем resolution
                  switching/art direction
                </li>
              </ul>
            </li>

            <li>
              <b>Реализовывал различные структуры данных и алгоритмы на JS</b>
              <ul>
                <li>
                  set, linked list, stack, queue/priority queue, hash-table, graph, dfs/bfs traverse, binary tree, heap,
                  trie
                </li>
                <li>
                  сортировка: selection sort, bubble sort, merge sort, quick sort; поиск: binary search (3 разных
                  паттерна)
                </li>
                <li>решение задач на codewars и leetcode</li>
              </ul>
            </li>

            <li>
              <b>Дополнительно:</b>
              <ul>
                <li>Git</li>
                <li>Chrome/React/Redux devtools</li>
                <li>регулярные выражения (использовал при написании плагина для Gulp)</li>
                <li>использовал UI-библиотеки: Mantine, Material UI, React Bootstrap</li>
                <li>опыт деплоя через Heroku, Netlify, Vercel, Surge</li>
              </ul>
            </li>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
