import { TemplateView } from "hydrogen-view-sdk";
import { Builder } from "hydrogen-view-sdk/types/platform/web/ui/general/TemplateView";
import { RootViewModel } from "../../viewmodels/RootViewModel";
import { AccountSetupView } from "./AccountSetupView";
import { ChatterboxView } from "./ChatterboxView";

export class RootView extends TemplateView<RootViewModel> {
    render(t: Builder<RootViewModel>, vm: RootViewModel) {
        return t.mapView(vm => vm.activeSection, section => {
            switch(section) {
                case "start":
                    return new StartView(vm);
                case "account-setup":
                    return new AccountSetupView(vm.accountSetupViewModel);
                case "timeline":
                    return new ChatterboxView(vm.chatterboxViewModel);
            }
            return null;
        })
    }
}


class StartView extends TemplateView<RootViewModel> {
    render(t: Builder<RootViewModel>, vm: RootViewModel) {
        return t.button({ className: "StartChat", onClick: () => vm.start() }, "Start Chat");
    }
}
