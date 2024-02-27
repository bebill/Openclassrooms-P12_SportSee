interface PerformanceDataItem {
  value: number;
}

export interface PerformanceEntry {
  data: PerformanceDataItem[];
}

export class PerformanceModel {
  data: PerformanceDataItem[];

  constructor(entry: PerformanceEntry) {
    this.data = entry.data;
  }

  getPerformanceData(): { kind: string; value: number }[] {
    const kind = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Energie",
      "Cardio",
    ];
    const performanceData = this.data.map((item, index) => ({
      kind: kind[index],
      value: item.value,
    }));

    return performanceData;
  }
}
