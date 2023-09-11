import React from 'react';
import { ChartDataServiceImpl } from '../../services/ChartDataServiceImpl';

export interface IChartDataProvider {
	children: React.ReactNode;
	chartDataService: ChartDataServiceImpl;
}
