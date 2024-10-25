.qualification__container {
  max-width: 768px;
}

.qualification__tabs {
  display: flex;
  justify-content: center;
  margin-bottom: var(--mb-2);
}

.qualification__button {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  color: var(--title-color);
  margin: 0 var(--mb-1);
  cursor: pointer;
}

.qualification__button:hover {
  color: var(--title-color-dark);
}

.qualification__icon {
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
}

.qualification__active {
  color: var(--title-color-dark);
}

.qualification__sections {
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;
}

.qualification__content {
  display: none;
}

.qualification__content-active {
  display: block;
}

.qualification__data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
}

.qualification__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}

.qualification__subtitle {
  display: inline-block;
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb-1);
}

.qualification__calendar {
  font-size: var(--small-font-size);
}

.qualification__calendar-icon {
  margin-top: var(--mb-0-25);
  margin-right: var(--mb-0-25);
}

.qualification__rounder {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--text-color);
  border-radius: 50%;
}

.qualification__line {
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--text-color);
  transform: translate(6px, -7px);
}

/* BREAK POINTS */
@media screen and (max-width: 992px) {
  .qualification__container {
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 768px) {
  .qualification__container {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
}

@media screen and (max-width: 576px) {
  .qualification__sections {
    grid-template-columns: initial;
  }

  .qualification__button {
    margin: 0 var(--mb-0-75);
  }
}

@media screen and (max-width: 350px) {
  .qualification__data {
    gap: 0.5rem;
  }
}
