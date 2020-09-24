import {  SurveyOption } from './survey-option.model';
export interface SurveyRow {
  id: number;
  title: string;
  answered: boolean;
  statement: string;
  options: SurveyOption
}
