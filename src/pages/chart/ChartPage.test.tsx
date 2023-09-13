import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ChartPage from './ChartPage';

test('button test: when click the reset button', () => {
	const reSetButton = screen.getByTestId('초기화');
	const heading = screen.getByRole('heading');

	act(() => {
		userEvent.click(reSetButton);
	});

	expect(heading).toHaveTextContent('초기화');
});

test('button test: when click the jung button', () => {
	const { jungButton } = setUp();
	const heading = screen.getByRole('heading');

	act(() => {
		userEvent.click(jungButton);
	});

	expect(heading).toHaveTextContent('중랑구');
});

test('button test: when click the no button', () => {
	const { noButton } = setUp();
	const heading = screen.getByRole('heading');

	act(() => {
		userEvent.click(noButton);
	});

	expect(heading).toHaveTextContent('노원구');
});

test('button test: when click the seong button', () => {
	const { seongButton } = setUp();
	const heading = screen.getByRole('heading');

	act(() => {
		userEvent.click(seongButton);
	});

	expect(heading).toHaveTextContent('성북구');
});

test('button test: when click the gang button', () => {
	const { gangButton } = setUp();
	const heading = screen.getByRole('heading');

	act(() => {
		userEvent.click(gangButton);
	});

	expect(heading).toHaveTextContent('강남구');
});

function setUp() {
	render(<ChartPage />);

	const reSetButton = screen.getByTestId('초기화');
	const seongButton = screen.getByTestId('성북구');
	const gangButton = screen.getByTestId('강남구');
	const noButton = screen.getByTestId('노원구');
	const jungButton = screen.getByTestId('중랑구');

	return { reSetButton, seongButton, gangButton, noButton, jungButton };
}
