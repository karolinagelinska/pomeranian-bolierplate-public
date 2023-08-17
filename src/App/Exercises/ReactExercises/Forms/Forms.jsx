import './styles.css';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { useEffect, useState } from 'react';
import { Checkboxes } from './Checkboxes/Checkboxes';

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs backend-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'Przelew tradycyjny' },
];

const additionalOptionList = [
  { fieldName: 'github', label: 'Intro do GitHub' },
  { fieldName: 'environment', label: 'Ustawienia środowiska' },
  { fieldName: 'extraDocuments', label: 'Materiały dodatkowe' },
];

const requiredFields = [
  'nameAndSurname',
  'email',
  'product',
  'paymentType',
  'consents',
];

export function FormExercise() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionalOptions: {
      github: true,
      environment: false,
      extraDocuments: true,
    },
    nameAndSurname: '',
    email: '',
    details: '',
    consents: false,
  });

  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);

  const [isEmailValid, setIsEmailValid] = useState();
  const [orderId, setOrderId] = useState();

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes(' ')
      : true;

  const isFieldsValid =
    isEmailValid && isNameAndSurnameValid && isAllRequiredFieldsFilled;

  function updateAdditionalOptions(fieldName, newValue) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [fieldName]: newValue,
      },
    });
  }

  function updateFormData(onChangeEvent) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  async function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      try {
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <FieldSection title="Wybierz produkt*">
            {
              <select
                name="product"
                value={formData.product}
                onChange={(event) => {
                  updateFormData(event);
                }}
              >
                {productOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            }
          </FieldSection>
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              options={paymentTypeOptions}
              value={formData.paymentType}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Opcje dodatkowe do zamówienia">
            <Checkboxes
              list={additionalOptionList.map((item) => {
                return {
                  ...item,
                  isChecked: formData.additionalOptions[item.fieldName],
                };
              })}
              onChange={updateAdditionalOptions}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <FieldSection title="Imię i nazwisko *">
            <input
              type="text"
              name="nameAndSurname"
              value={formData.nameAndSurname}
              onChange={updateFormData}
              className={!isNameAndSurnameValid ? 'input-field-error' : ''}
            />
            {!isNameAndSurnameValid && (
              <p className="input-field-error-message">
                Nie podałeś(-aś) nazwiska!
              </p>
            )}
          </FieldSection>
          <FieldSection title="Twój pseudonim *">
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Adres do wysyłki * ">
            <input
              type=""
              name="adres"
              value={formData.adres}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Email *">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={updateFormData}
              className={isEmailValid === false ? 'input-field-error' : ''}
              onBlur={() => {
                setIsEmailValid(validateEmail(formData.email));
              }}
            />
            {isEmailValid === false && (
              <p className="input-field-error-message">
                Email jest niepoprawny!
              </p>
            )}
          </FieldSection>

          <FieldSection title="Numer kontaktowy * ">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              name="phone"
              value={formData.phone}
              onChange={updateFormData}
            />
          </FieldSection>

          <FieldSection title="Uwagi dodatkowe">
            <textarea
              name="details"
              cols="40"
              rows="10"
              style={{ resize: 'none' }}
              value={formData.details}
              onChange={updateFormData}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="ZAKŁADANIE KONTA">
          <FieldSection title="Chcę założyć konto razem z zamówieniem">
            <Checkboxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'zakładam konto',
                  isChecked: formData.consents,
                },
              ]}
            />
          </FieldSection>
          <FieldSection title="Moje hasło">
            <input
              type="password"
              name="password1"
              value={formData.password1}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Powtórz hasło">
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={updateFormData}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="ZGODY I NEWSLETTER">
          <FieldSection title="Realizując zamówienie, akceptujesz regulamin naszego sklepu">
            <Checkboxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'apceptuję regulamin*',
                  isChecked: formData.consents,
                },
              ]}
              onChange={(_, newValue) => {
                setIsAllRequiredFieldsFilled(true);
                setFormData({
                  ...formData,
                  consents: newValue,
                });
              }}
            />
          </FieldSection>
          <FieldSection title="Dołącz do naszego newslettera z promocjami dla naszych klientów">
            <Checkboxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'zapisuję się na listę mailingową',
                  isChecked: formData.consents,
                },
              ]}
            />
          </FieldSection>
        </MainSection>

        {!isAllRequiredFieldsFilled && (
          <p className="input-field-error-message">
            Wypełnij wszystkie pola wymagane!
          </p>
        )}

        <button type="submit" disabled={!isFieldsValid}>
          SKŁADAM ZAMÓWIENIE
        </button>
      </form>
      {orderId && (
        <div className="modal-container">
          <div className="modal">
            <button
              className="modal-button"
              onClick={() => {
                setOrderId(undefined);
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
