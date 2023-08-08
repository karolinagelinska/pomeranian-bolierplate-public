import './styles.css';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { useState } from 'react';

const productOptions = [
  { value: 'front-end', label: 'kurs front-end' },
  { value: 'back-end', label: 'kurs back-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

export const FormExercise = () => {
  const [product, setProduct] = useState('devops');
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
  });

  const updateFormData = (onChangeEvent) => {
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  };

  console.log('formData: ', formData);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('select:', event.target.product.value);
        }}
      >
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <FieldSection title="Wybierz produkt*">
            <select
              className="select-and-input"
              name="product"
              value={formData.product}
              onChange={(event) => updateFormData(event)}
            >
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldSection>
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              value={formData.paymentType}
              options={paymentTypeOptions}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Opcje dodatkowe do zamówienia"></FieldSection>
        </MainSection>
        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <FieldSection title="Imię i nazwisko*"></FieldSection>
          <FieldSection title="Twój pseudonim*"></FieldSection>
          <FieldSection title="Adres do wysyłki*"></FieldSection>
          <FieldSection title="Adres e-mail*"></FieldSection>
          <FieldSection title="Numer kontaktowy* "></FieldSection>
          <FieldSection title="Dodatkowe uwagi do zamówienia"></FieldSection>
        </MainSection>
        <MainSection title="ZAKŁADANIE KONTA">
          <FieldSection title="Chcę założyć konto razem z zamówieniem"></FieldSection>
          <FieldSection title="Moje hasło"></FieldSection>
          <FieldSection title="Powtórz hasło"></FieldSection>
        </MainSection>
        <MainSection title="ZGODY I NEWSLETTER">
          <FieldSection title="Realizując zamówienie, akceptujesz regulamin naszego sklepu"></FieldSection>
          <FieldSection title="Dołącz do naszego newslettera z promocjami dla naszych klientów"></FieldSection>
        </MainSection>
        <button type="submit">WYŚLIJ</button>
      </form>
    </div>
  );
};
