import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {GeoService} from './geo.service';
import {DataViewModel} from '../data-view.model';
import {UnixCodesService} from './unix-codes.service';
import {DateService} from './date.service';
import {SocialService} from './social.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  // Models
  howDidYouFindOutArray: DataViewModel[];
  phoneCountryArray: DataViewModel[];
  monthArray: DataViewModel[];
  dayArray: DataViewModel[];
  countyArray: DataViewModel[];
  cityArray: DataViewModel[];
  unixCodes: DataViewModel[];

  // Uploaded files Data
  files: File[] = [];

  // Sites data
  isModalShown: boolean;
  selectedSites = [];

  // Typeahead
  isFocused: boolean;
  isMouseOverOption: boolean;
  filteredUnixCode: any;

  position: string;
  form: FormGroup;

  constructor(private geoService: GeoService,
              private unixCodesService: UnixCodesService,
              private dateService: DateService,
              private socialService: SocialService) {
  }

  ngOnInit(): void {
    this.isModalShown = false;
    this.isFocused = false;
    this.isMouseOverOption = false;
    this.position = 'Alkatrész Kiszállitó';
    this.initServicesData();
    this.initForm();
  }

  initServicesData(): void {
    this.countyArray = this.geoService.getCounties();
    this.unixCodes = this.unixCodesService.getUnixCodes();
    this.dayArray = this.dateService.getDays();
    this.monthArray = this.dateService.getMoths();
    this.howDidYouFindOutArray = this.socialService.getSocialMedia();
    this.phoneCountryArray = this.socialService.getPhoneCountry();
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      howDidYouFindOut: new FormControl('-1', [Validators.required, Validators.min(0)]),
      phone: new FormGroup({
        phoneCountry: new FormControl('36', Validators.required),
        phoneNumber: new FormControl('', [Validators.required])
      }),
      unixCode: new FormControl(''),
      birthDate: new FormGroup({
        year: new FormControl('', [Validators.required, Validators.min(1900)]),
        month: new FormControl('0', Validators.required),
        day: new FormControl('0', Validators.required),
      }),
      residence: new FormGroup({
        county: new FormControl('-1', [Validators.required, Validators.min(0)]),
        city: new FormControl({value: '-1', disabled: true}, [Validators.required, Validators.min(0)]),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      income: new FormControl('', [Validators.required, Validators.min(0)]),
      drivingLicenseYear: new FormControl('', [Validators.required, Validators.min(1900)]),
      agree: new FormControl('', [Validators.requiredTrue]),
    });
  }

  // County check
  checkCounty(): void {
    // tslint:disable-next-line:radix
    const countyId: number = parseInt(this.form.get('residence').get('county').value);
    if (countyId > -1) {
      this.cityArray = this.countyArray[countyId].child;
      this.form.get('residence').get('city').enable();
    } else {
      this.form.get('residence').get('city').disable();
    }
  }

  // File Upload
  uploadFiles(files: File[]): void {
    this.files = [];
    for (const file of files) {
      if (this.checkMimeType(file)){
        this.files.push(file);
      }
    }
  }

  private checkMimeType(file: File): boolean {
    const validMimeTypes = ['BMP', 'JPG', 'GIF', 'PNG', 'PDF', 'DOC', 'DOCX', 'ODT', 'RTF', 'TXT', 'JPEG', 'XLS', 'XPS', 'XLSX'];
    const splittedFileName = file.name.split('.');
    const fileMimeType = splittedFileName[splittedFileName.length - 1].toUpperCase();

    return validMimeTypes.includes(fileMimeType);
  }

  // Modal
  showModal(): void {
    this.isModalShown = true;
  }

  modalChanges(selectedSites: number[]): void {
    this.selectedSites = [...selectedSites];
    this.isModalShown = false;
  }

  // Typeahead
  focusChange(status: boolean): void {
    if (!this.isMouseOverOption) {
      this.isFocused = status;
    }
  }

  setUnixCode(value: string): void {
    this.form.get('unixCode').setValue(value);
    this.isMouseOverOption = false;
    this.isFocused = false;
  }

  updateTypeHead(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.filteredUnixCode = this.unixCodes.filter(unixCode => unixCode.placeholder.includes(value))[0];
  }

  overChange(status: boolean): void {
    this.isMouseOverOption = status;
  }

  // Submit
  submit(): void {
    if (this.form.valid || (this.files.length > 0) || (this.selectedSites.length > 0)) {
      console.log('Submit:');
      console.log(this.form);
      console.log(this.files);
      console.log(this.selectedSites);
    }
  }

  // Getters
  get name(): AbstractControl {
    return this.form.get('name');
  }

  get howDidYouFindOut(): AbstractControl {
    return this.form.get('howDidYouFindOut');
  }

  get phoneCountry(): AbstractControl {
    return this.form.get('phone').get('phoneCountry');
  }

  get phoneNumber(): AbstractControl {
    return this.form.get('phone').get('phoneNumber');
  }

  get birthYear(): AbstractControl {
    return this.form.get('birthDate').get('year');
  }

  get birthMonth(): AbstractControl {
    return this.form.get('birthDate').get('month');
  }

  get birthDay(): AbstractControl {
    return this.form.get('birthDate').get('day');
  }

  get county(): AbstractControl {
    return this.form.get('residence').get('county');
  }

  get city(): AbstractControl {
    return this.form.get('residence').get('city');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get income(): AbstractControl {
    return this.form.get('income');
  }

  get drivingLicenseYear(): AbstractControl {
    return this.form.get('drivingLicenseYear');
  }

  get agree(): AbstractControl {
    return this.form.get('agree');
  }
}
