import css from './Filter.module.css'

export default function Filter({value, onCharge}) {
    return (
          <label className={css.Filter__label}>
            Filter
            <input
              className={css.Filter__name}
              type="text"
              name="filter"
              required
              placeholder="search name"
              onChange={onCharge}
              value={value}
            />
          </label>
    )
  }
