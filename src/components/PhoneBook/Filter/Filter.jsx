import css from './Filter.module.css'

export default function Filter({value, onCharge}) {
    return (
          <label className={css.Filter__label}>
            Name
            <input
              className={css.Filter__name}
              type="text"
              name="filter"
              required
              placeholder="filter name"
              onChange={onCharge}
              value={value}
            />
          </label>
    )
  }