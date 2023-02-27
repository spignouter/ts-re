import styles from './Company.module.scss'
import cardPng from '../../assets/images/company-card__title.png'

export interface CompanyProps {}

export const Company = ({}: CompanyProps) => (
  <section className={styles.sectionCompany}>
    <div className={styles.companyCard}>
      <div className={styles.title}>
        <img src={cardPng} alt="АА" />
        <h3>Название ЖК</h3>
        <span className={styles.titleSub}>Имя затстройщика</span>
      </div>
      <p className={styles.paragraph}>
        Группа Аквилон - одна из ведущих девелоперских компаний, предоставляющих
        полный спектр услуг на рынке недвижимости, создана в Архангельске 13
        октября 2003 года, более 18 лет на рынке. Входит в ТОП-20 крупнейших
        застройщиков страны, в 10-ку крупнейших застройщиков Санкт-Петербурга.
        Группа Аквилон признана системообразующим предприятием России. География
        присутствия: Москва, Санкт-Петербург, Ленинградская область,
        Архангельск, Северодвинск.
      </p>
      <div className={styles.buttons}>
        <div className={styles.gridRight}>
          <a href="" className={styles.btn}>
            Чат онлайн
          </a>
          <a href="" className={styles.btn}>
            Обратный звонок
          </a>
        </div>
        <div className={styles.gridLeft}>
          <a href="" className={styles.btn}>
            Редактировать
          </a>
        </div>
      </div>
    </div>
  </section>
)
