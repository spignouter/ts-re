import styles from './Location.module.scss'

export interface LocationProps {}

export const Location = ({}: LocationProps) => (
  <section className="section-location">
    <div className={styles.location}>
      <div className={styles.title}>
        <div className={styles.title1}>
          <h3>Расположение</h3>
        </div>
        <div className={styles.title2}>
          <h4>Юбилейный микрорайон, 117 стр</h4>
        </div>
      </div>
      <div className={`${styles.deadline} ${styles.lineBlack}`}>Срок сдачи</div>
      <div className={`${styles.deadline1} ${styles.lineBlack}`}>
        Март 2023 года
      </div>
      <div className={`${styles.payment} ${styles.lineBlack}`}>Оплата</div>
      <div className={`${styles.payment1} ${styles.lineGrey}`}>ДКП</div>
      <div className={`${styles.payment2} ${styles.lineGrey}`}>Ипотека</div>
      <div className={`${styles.payment3} ${styles.lineBlack}`}>
        Рассрочка: 70% первый взнос, 30% на 3 месяца
      </div>
      <div className={`${styles.characteristics} ${styles.lineBlack}`}>
        Характеристики
      </div>
      <div className={`${styles.characteristics1} ${styles.lineGrey}`}>
        Бизнес-класс
      </div>
      <div className={`${styles.characteristics2} ${styles.lineGrey}`}>
        Управляющая компания
      </div>
      <div className={`${styles.characteristics3} ${styles.lineGrey}`}>
        Закрытая охраняемая территория
      </div>
      <div className={`${styles.characteristics4} ${styles.lineGrey}`}>
        1,5 км до моря
      </div>
      <div className={`${styles.characteristics5} ${styles.lineGrey}`}>
        Черновая отделка
      </div>
      <div className={`${styles.characteristics6} ${styles.lineBlack}`}>
        Вид на горы, море, парк, атриум
      </div>
      <div className={`${styles.communications} ${styles.lineBlack}`}>
        Коммуникации
      </div>
      <div className={`${styles.communications1} ${styles.lineGrey}`}>
        Центральное отопление
      </div>
      <div className={`${styles.communications2} ${styles.lineGrey}`}>
        Водоснабжение и канализация
      </div>
      <div className={`${styles.communications3} ${styles.lineBlack}`}>
        Эллектричество
      </div>
      <div className={styles.buttons}>
        <a href="" className="btn company-card__btn">
          Изменить
        </a>
      </div>
    </div>
  </section>
)
