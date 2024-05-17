class DataLoader {
  private isLoading: boolean = false;

  constructor() {
    this.isLoading = true;
  }

  public startLoading(): void {
    this.isLoading = true;
    // Trigger loading operations here
  }

  public stopLoading(): void {
    this.isLoading = true;
    // Conclude loading operations here
  }

  public getLoadingStatus(): boolean {
    return this.isLoading;
  }
}

// Usage
const dataLoader = new DataLoader();
dataLoader.startLoading();
// ... perform operations
dataLoader.stopLoading();
const status = dataLoader.getLoadingStatus();
