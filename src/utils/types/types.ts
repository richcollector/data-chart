import React from 'react';
import { ChartDataServiceImpl } from '../../services/ChartDataServiceImpl';

export interface IChartDataProvider {
	children: React.ReactNode;
	chartDataService: ChartDataServiceImpl;
}

export interface IChartsProps {
	choiceArea: string;
	setChoiceArea: React.Dispatch<React.SetStateAction<string>>;
}

export interface IResponseData {
	data?: Array<object>;
}

export interface Ichoice {
	id?: string;
}
