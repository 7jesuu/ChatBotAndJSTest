import React, { useState } from 'react';
import ChatBot, { UserInput } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const CustomChatbot = () => {
  const getTimeOfDayGreeting = () => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      return 'утро';
    } else if (currentTime >= 12 && currentTime < 18) {
      return 'день';
    } else {
      return 'вечер';
    }
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleUserInput = (input) => {
    if (input.toLowerCase() === 'назад') {
      setCurrentStep(1);
    } else {
      setSelectedOption(input);
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const steps = [
    {
      id: '1',
      message: `Доброе ${getTimeOfDayGreeting()}! Выберите вклад:`,
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'Альфа-Вклад Максимальный', label: '1. Альфа-Вклад Максимальный', trigger: '3' },
        { value: 'Альфа-Вклад', label: '2. Альфа-Вклад', trigger: '5' },
      ],
    },
    {
      id: '3',
      message: 'Отличный выбор! Альфа-Вклад Максимальный предоставляет вам следующие условия:',
      trigger: '4',
    },
    {
      id: '4',
      message: '✨ Процентная ставка: 15%',
      trigger: '5a',
    },
    {
      id: '5a',
      message: '💰 Минимальная сумма вклада: 50,000 рублей',
      trigger: '5b',
    },
    {
      id: '5b',
      message: '⏳ Срок вклада: от 3-х месяцев до 3-х лет',
      trigger: '6',
    },
    {
      id: '6',
      message: 'Если у вас есть дополнительные вопросы или что-то еще, напишите нам:',
      trigger: 'back',
    },
    {
      id: 'back',
      options: [{ value: 'назад', label: 'назад', trigger: '1' }],
    },
    {
      id: '7',
      user: true,
      trigger: '8',
    },
    {
      id: '8',
      message: 'Спасибо за ваш вопрос! Мы ответим вам как можно скорее.',
      end: true,
    },
    {
      id: '5',
      message: 'Вы выбрали: Альфа-Вклад',
      trigger: '9',
    },
    {
      id: '9',
      message: 'Отличный выбор! Альфа-Вклад предоставляет вам следующие условия:',
      trigger: '10',
    },
    {
      id: '10',
      message: '✨ Процентная ставка: до 14,01%',
      trigger: '11a',
    },
    {
      id: '11a',
      message: '💰 Минимальная сумма вклада: 10,000 рублей',
      trigger: '11b',
    },
    {
      id: '11b',
      message: '⏳ Срок вклада: от 3-х месяцев до 3-х лет',
      trigger: '12',
    },
    {
      id: '12',
      message: 'Если у вас есть дополнительные вопросы или что-то еще, напишите нам:',
      trigger: 'back',
    },
    {
      id: '13',
      user: true,
      trigger: '14',
    },
    {
      id: '14',
      message: 'Спасибо за ваш вопрос! Мы ответим вам как можно скорее.',
      end: true,
    },
    {
        id: 'end',
        message: 'Спасибо за использование чат-бота!',
        end: true,
      },
      {
        id: 'writeQuestion',
        message: 'Если у вас есть еще вопросы, напишите нам:',
        trigger: 'userInput',
      },
      {
        id: 'userInput',
        user: true,
        end: true,
      },
    ];

  const theme = {
    background: '#fff',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#ff0000',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#fff',
    botFontColor: '#ff0000',
    userBubbleColor: '#ff0000',
    userFontColor: '#fff',
  };

  const CustomUserInput = (props) => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleUserInput(event.target.value);
      }
    };

    return <UserInput {...props} onKeyPress={handleKeyPress} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        userDelay={1000}
        handleEnd={(obj) => setSelectedOption(obj.values[2])}
        headerTitle="Чат-бот Альфа-Банка"
        floating={true}
        userDelay={1000}
        width="400px"
        inputComponent={CustomUserInput}
        step={currentStep}
        hideSubmitButton
      />
    </ThemeProvider>
  );
};

export default CustomChatbot;
