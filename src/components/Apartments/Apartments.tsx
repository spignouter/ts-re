import styles from './Apartments.module.scss'

export interface ApartmentsProps {}

export const Apartments = ({}: ApartmentsProps) => (
  <section className={styles.sectionApartments}>
    <div className={styles.apartments}>
      <div className={styles.title}>
        <h3>Квартиры в ЖК ...</h3>
      </div>
      <div className={styles.buttons1}>
        <a href="!#" className={styles.btn}>
          Изменить вид(иконкой)
        </a>
      </div>
      <div className={styles.buttons3}>
        <a href="!#" className={styles.btn}>
          Забронировать
        </a>
      </div>
      <div className={styles.buttons2}>
        <a href="!#" className={styles.btn}>
          Создать
        </a>
      </div>
      <div className={styles.status}>
        <div className={styles.box}>
          <div className={styles.box1}></div>
          Свободны
        </div>
        <div className={styles.box}>
          <div className={styles.box2}></div>
          Акции
        </div>
        <div className={styles.box}>
          <div className={styles.box3}></div>
          Резерв
        </div>
        <div className={styles.box}>
          <div className={styles.box4}></div>
          Проданные
        </div>
      </div>
      <div className={styles.tables}>
        <div className="apartments-colums-1">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  1 этаж
                </td>
                <td className={styles.number}>1</td>
                <td className={styles.number}>
                  2<br />
                </td>
                <td className={styles.number}>3</td>
                <td className={styles.number}>4</td>
                <td className={styles.number}>5</td>
              </tr>
              <tr>
                <td className={styles.number}>6</td>
                <td className={styles.number}>7</td>
                <td className={styles.number}>8</td>
                <td className={styles.number}>9</td>
                <td className={styles.number}>
                  10
                  <br />
                </td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  2 этаж
                </td>
                <td className={styles.number}>11</td>
                <td className={styles.number}>12</td>
                <td className={styles.number}>13</td>
                <td className={styles.number}>14</td>
                <td className={styles.number}>15</td>
              </tr>
              <tr>
                <td className={styles.number}>16</td>
                <td className={styles.number}>17</td>
                <td className={styles.number}>18</td>
                <td className={styles.number}>19</td>
                <td className={styles.number}>20</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  3 этаж
                </td>
                <td className={styles.number}>21</td>
                <td className={styles.number}>22</td>
                <td className={styles.number}>23</td>
                <td className={styles.number}>24</td>
                <td className={styles.number}>25</td>
              </tr>
              <tr>
                <td className={styles.number}>26</td>
                <td className={styles.number}>27</td>
                <td className={styles.number}>28</td>
                <td className={styles.number}>29</td>
                <td className={styles.number}>30</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  4 этаж
                </td>
                <td className={styles.number}>31</td>
                <td className={styles.number}>32</td>
                <td className={styles.number}>33</td>
                <td className={styles.number}>34</td>
                <td className={styles.number}>35</td>
              </tr>
              <tr>
                <td className={styles.number}>36</td>
                <td className={styles.number}>37</td>
                <td className={styles.number}>38</td>
                <td className={styles.number}>39</td>
                <td className={styles.number}>40</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  5 этаж
                </td>
                <td className={styles.number}>41</td>
                <td className={styles.number}>42</td>
                <td className={styles.number}>43</td>
                <td className={styles.number}>44</td>
                <td className={styles.number}>45</td>
              </tr>
              <tr>
                <td className={styles.number}>46</td>
                <td className={styles.number}>47</td>
                <td className={styles.number}>48</td>
                <td className={styles.number}>49</td>
                <td className={styles.number}>50</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  6 этаж
                </td>
                <td className={styles.number}>51</td>
                <td className={styles.number}>52</td>
                <td className={styles.number}>53</td>
                <td className={styles.number}>54</td>
                <td className={styles.number}>55</td>
              </tr>
              <tr>
                <td className={styles.number}>56</td>
                <td className={styles.number}>57</td>
                <td className={styles.number}>58</td>
                <td className={styles.number}>59</td>
                <td className={styles.number}>60</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="apartments-colums-2">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  1 этаж
                </td>
                <td className={styles.number}>1</td>
                <td className={styles.number}>
                  2<br />
                </td>
                <td className={styles.number}>3</td>
                <td className={styles.number}>4</td>
                <td className={styles.number}>5</td>
              </tr>
              <tr>
                <td className={styles.number}>6</td>
                <td className={styles.number}>7</td>
                <td className={styles.number}>8</td>
                <td className={styles.number}>9</td>
                <td className={styles.number}>
                  10
                  <br />
                </td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  2 этаж
                </td>
                <td className={styles.number}>11</td>
                <td className={styles.number}>12</td>
                <td className={styles.number}>13</td>
                <td className={styles.number}>14</td>
                <td className={styles.number}>15</td>
              </tr>
              <tr>
                <td className={styles.number}>16</td>
                <td className={styles.number}>17</td>
                <td className={styles.number}>18</td>
                <td className={styles.number}>19</td>
                <td className={styles.number}>20</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  3 этаж
                </td>
                <td className={styles.number}>21</td>
                <td className={styles.number}>22</td>
                <td className={styles.number}>23</td>
                <td className={styles.number}>24</td>
                <td className={styles.number}>25</td>
              </tr>
              <tr>
                <td className={styles.number}>26</td>
                <td className={styles.number}>27</td>
                <td className={styles.number}>28</td>
                <td className={styles.number}>29</td>
                <td className={styles.number}>30</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  4 этаж
                </td>
                <td className={styles.number}>31</td>
                <td className={styles.number}>32</td>
                <td className={styles.number}>33</td>
                <td className={styles.number}>34</td>
                <td className={styles.number}>35</td>
              </tr>
              <tr>
                <td className={styles.number}>36</td>
                <td className={styles.number}>37</td>
                <td className={styles.number}>38</td>
                <td className={styles.number}>39</td>
                <td className={styles.number}>40</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  5 этаж
                </td>
                <td className={styles.number}>41</td>
                <td className={styles.number}>42</td>
                <td className={styles.number}>43</td>
                <td className={styles.number}>44</td>
                <td className={styles.number}>45</td>
              </tr>
              <tr>
                <td className={styles.number}>46</td>
                <td className={styles.number}>47</td>
                <td className={styles.number}>48</td>
                <td className={styles.number}>49</td>
                <td className={styles.number}>50</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  6 этаж
                </td>
                <td className={styles.number}>51</td>
                <td className={styles.number}>52</td>
                <td className={styles.number}>53</td>
                <td className={styles.number}>54</td>
                <td className={styles.number}>55</td>
              </tr>
              <tr>
                <td className={styles.number}>56</td>
                <td className={styles.number}>57</td>
                <td className={styles.number}>58</td>
                <td className={styles.number}>59</td>
                <td className={styles.number}>60</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="apartments-colums-3">
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  1 этаж
                </td>
                <td className={styles.number}>1</td>
                <td className={styles.number}>
                  2<br />
                </td>
                <td className={styles.number}>3</td>
                <td className={styles.number}>4</td>
                <td className={styles.number}>5</td>
              </tr>
              <tr>
                <td className={styles.number}>6</td>
                <td className={styles.number}>7</td>
                <td className={styles.number}>8</td>
                <td className={styles.number}>9</td>
                <td className={styles.number}>
                  10
                  <br />
                </td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  2 этаж
                </td>
                <td className={styles.number}>11</td>
                <td className={styles.number}>12</td>
                <td className={styles.number}>13</td>
                <td className={styles.number}>14</td>
                <td className={styles.number}>15</td>
              </tr>
              <tr>
                <td className={styles.number}>16</td>
                <td className={styles.number}>17</td>
                <td className={styles.number}>18</td>
                <td className={styles.number}>19</td>
                <td className={styles.number}>20</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  3 этаж
                </td>
                <td className={styles.number}>21</td>
                <td className={styles.number}>22</td>
                <td className={styles.number}>23</td>
                <td className={styles.number}>24</td>
                <td className={styles.number}>25</td>
              </tr>
              <tr>
                <td className={styles.number}>26</td>
                <td className={styles.number}>27</td>
                <td className={styles.number}>28</td>
                <td className={styles.number}>29</td>
                <td className={styles.number}>30</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  4 этаж
                </td>
                <td className={styles.number}>31</td>
                <td className={styles.number}>32</td>
                <td className={styles.number}>33</td>
                <td className={styles.number}>34</td>
                <td className={styles.number}>35</td>
              </tr>
              <tr>
                <td className={styles.number}>36</td>
                <td className={styles.number}>37</td>
                <td className={styles.number}>38</td>
                <td className={styles.number}>39</td>
                <td className={styles.number}>40</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  5 этаж
                </td>
                <td className={styles.number}>41</td>
                <td className={styles.number}>42</td>
                <td className={styles.number}>43</td>
                <td className={styles.number}>44</td>
                <td className={styles.number}>45</td>
              </tr>
              <tr>
                <td className={styles.number}>46</td>
                <td className={styles.number}>47</td>
                <td className={styles.number}>48</td>
                <td className={styles.number}>49</td>
                <td className={styles.number}>50</td>
              </tr>
              <tr>
                <td className={styles.floor} rowSpan={2}>
                  6 этаж
                </td>
                <td className={styles.number}>51</td>
                <td className={styles.number}>52</td>
                <td className={styles.number}>53</td>
                <td className={styles.number}>54</td>
                <td className={styles.number}>55</td>
              </tr>
              <tr>
                <td className={styles.number}>56</td>
                <td className={styles.number}>57</td>
                <td className={styles.number}>58</td>
                <td className={styles.number}>59</td>
                <td className={styles.number}>60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
)
